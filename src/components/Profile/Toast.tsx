import { useEffect, SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';

type ToastProps = {
    setToast: Dispatch<SetStateAction<boolean>>
    text: string;
}

const ToastBox = styled.div`
    width: 100%;
    max-width: 600px;
    position: fixed;
    bottom: 120px;
    display: flex;

    p{
      margin: 0 auto;
      color: #a3afbc;
      padding-right: 16px;
    }
`;

export default function Toast({ setToast, text }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <ToastBox>
      <p>{text}</p>
    </ToastBox>
  );
}
