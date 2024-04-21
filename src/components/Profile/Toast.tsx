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
    background-color: #e8ebf0;
    border-radius: 15px;
    padding: 10px;

    p{
      margin: 0 auto;
      color: #1d1d1d;
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
