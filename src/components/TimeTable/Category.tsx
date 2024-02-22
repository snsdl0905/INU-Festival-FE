import { css, styled } from 'styled-components';

type ButtonProps = {
    $active: boolean;
  }

const Button = styled.button<ButtonProps>`
      width: 104px;
      height: 37px;;
      border-radius: 20px;
      border: 0;
      background: transparent;
      color: #FFFFFF;
      cursor: pointer;
  
      ${(props) => props.$active && css`
        background: #FFFFFF;
        color: #000;
        transition: .3s;
      `};
  `;

type CategoryProps = {
    active: boolean;
    category: string;
    handleSetFilterCategory: (category: string) => void;
    date: string;
  }

export default function Category({
  active,
  category, handleSetFilterCategory,
  date,
}: CategoryProps) {
  return (
    <li key={category}>
      <p>{date}</p>
      <Button
        type="button"
        $active={active}
        onClick={() => handleSetFilterCategory(category)}
      >
        Day
        {' '}
        {category[category.length - 1]}
      </Button>
    </li>
  );
}
