import styled from "styled-components";
import { Form } from "formik";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 7em);
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const BasketWrapper = styled.div`
  width: 100%;
`;

/* ==========================================================================
                        Step-2
========================================================================== */

export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 1000px) {
    height: calc(100vh - 15em);
    h1 {
      text-align: center;
    }
  }
`;

export const ShippingForm = styled(Form)`
  width: 600px;
  padding: 3em;
  border-radius: 1em;
  position: relative;
  margin-bottom: 3em;

  ::before {
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(#1d1b1b, #000000);
    content: "";
    z-index: -1;
    border-radius: 1em;
  }

  background: rgb(54, 51, 51);
  background: -moz-linear-gradient(
    342deg,
    rgba(54, 51, 51, 1) 10%,
    rgba(0, 0, 0, 1) 55%
  );
  background: -webkit-linear-gradient(
    342deg,
    rgba(54, 51, 51, 1) 10%,
    rgba(0, 0, 0, 1) 55%
  );
  background: linear-gradient(
    342deg,
    rgba(54, 51, 51, 1) 10%,
    rgba(0, 0, 0, 1) 55%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#363333",endColorstr="#000000",GradientType=1);
  h4 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  @media (max-width: 1000px) {
    margin-top: 2em;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 100%;
  height: 5rem;
  width: 5rem;
  margin: 1em auto 1em auto;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

export const BottomTextWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  bottom: 2rem;
  width: 100%;
`;

export const SpanWrapper = styled.div<{ bold?: any; center?: any }>`
  font-weight: 700;
  margin-left: 0.5rem;
  transition: all 0.2s;
  color: #df7c19;

  &:hover {
    cursor: pointer;
    color: #f1881e;
  }
  text-decoration: none;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShippingWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
