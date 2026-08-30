"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type OfferType =
  | "internet"
  | "streaming"
  | "extra"
  | "phone"
  | "promotion";

export type SelectedOffer = {
  id: string;

  type: OfferType;

  name: string;

  price?: number;

  subtitle?: string;

  details?: string[];
};

export type CustomerStatus =
  | "cliente"
  | "novo"
  | null;

type OfferContextType = {
  offers: SelectedOffer[];

  customerStatus: CustomerStatus;

  addOffer: (
    offer: SelectedOffer
  ) => void;

  removeOffer: (
    type: OfferType,
    id: string
  ) => void;

  clearOffers: () => void;

  setCustomerStatus: (
    status: CustomerStatus
  ) => void;

  hasOffer: (
    type: OfferType,
    id: string
  ) => boolean;
};

const OfferContext =
  createContext<OfferContextType | null>(
    null
  );

/*Chaves usadas no navegador*/
const OFFERS_STORAGE =
  "litoral-selected-offers";

const CUSTOMER_STORAGE =
  "litoral-customer-status";

export default function OfferProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [
    offers,
    setOffers,
  ] = useState<SelectedOffer[]>([]);

  const [
    customerStatus,
    setCustomerStatusState,
  ] =
    useState<CustomerStatus>(null);

  /*Evita que os useEffects de salvamento rodem antes de recuperar os dados já existentes no localStorage*/
  const [
    hydrated,
    setHydrated,
  ] = useState(false);

  /*recupera dados / Executa somente no navegador*/
  useEffect(() => {
    const storedOffers =
      localStorage.getItem(
        OFFERS_STORAGE
      );

    const storedCustomer =
      localStorage.getItem(
        CUSTOMER_STORAGE
      );

    /*Recupera carrinho*/
    if (storedOffers) {
      try {
        const parsed =
          JSON.parse(
            storedOffers
          );

        if (
          Array.isArray(parsed)
        ) {
          setOffers(
            parsed as SelectedOffer[]
          );
        }
      } catch {
        /*Se o conteúdo salvo estiver corrompido, limpamos somente aquela chave*/
        localStorage.removeItem(
          OFFERS_STORAGE
        );
      }
    }

    /*Recupera situação do cliente*/
    if (
      storedCustomer ===
        "cliente" ||
      storedCustomer ===
        "novo"
    ) {
      setCustomerStatusState(
        storedCustomer
      );
    }

    /*
     * Só agora liberamos o salvamento.
     */
    setHydrated(true);
  }, []);

  /*salva carrinho*/

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    localStorage.setItem(
      OFFERS_STORAGE,
      JSON.stringify(
        offers
      )
    );
  }, [
    offers,
    hydrated,
  ]);

  /*salva status do cliente*/

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    if (
      customerStatus === null
    ) {
      localStorage.removeItem(
        CUSTOMER_STORAGE
      );

      return;
    }

    localStorage.setItem(
      CUSTOMER_STORAGE,
      customerStatus
    );
  }, [
    customerStatus,
    hydrated,
  ]);

  /*adicionar oferta*/

  function addOffer(
    offer: SelectedOffer
  ) {
    setOffers(
      (current) => {
        /*Internet: apenas um plano por vez. / Streaming: apenas um pacote por vez. / Telefonia: apenas um plano por vez.*/
        if (
          offer.type ===
            "internet" ||
          offer.type ===
            "streaming" ||
          offer.type ===
            "phone"
        ) {
          return [
            ...current.filter(
              (item) =>
                item.type !==
                offer.type
            ),

            offer,
          ];
        }

        /*Extras e promoções podem coexistir no carrinho*/
        const alreadyExists =
          current.some(
            (item) =>
              item.type ===
                offer.type &&
              item.id ===
                offer.id
          );

        if (
          alreadyExists
        ) {
          return current;
        }

        return [
          ...current,
          offer,
        ];
      }
    );
  }

  /*remover oferta*/

  function removeOffer(
    type: OfferType,
    id: string
  ) {
    setOffers(
      (current) =>
        current.filter(
          (offer) =>
            !(
              offer.type ===
                type &&
              offer.id ===
                id
            )
        )
    );
  }

  /*limpar carrinho*/

  function clearOffers() {
    setOffers([]);

    /*O estado já seria salvo como [], mas removemos imediatamente também*/
    localStorage.removeItem(
      OFFERS_STORAGE
    );
  }

  /*alterar status do cliente*/

  function setCustomerStatus(
    status: CustomerStatus
  ) {
    setCustomerStatusState(
      status
    );
  }

  /*verifica se está selecionado*/

  function hasOffer(
    type: OfferType,
    id: string
  ) {
    return offers.some(
      (offer) =>
        offer.type ===
          type &&
        offer.id ===
          id
    );
  }

  return (
    <OfferContext.Provider
      value={{
        offers,

        customerStatus,

        addOffer,

        removeOffer,

        clearOffers,

        setCustomerStatus,

        hasOffer,
      }}
    >
      {children}
    </OfferContext.Provider>
  );
}

export function useOffers() {
  const context =
    useContext(
      OfferContext
    );

  if (!context) {
    throw new Error(
      "useOffers precisa estar dentro de OfferProvider"
    );
  }

  return context;
}