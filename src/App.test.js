import React from "react";
import { render, fireEvent } from "@testing-library/react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={() => onClick("1234")}
      testid="my-button"
      aria-label="my-button"
      type="submit"
    >
      {label}
    </button>
  );
};

test(" ❤  Deve adicionar botão no documento! ❤ ", () => {
  const onClick = jest.fn();

  // metódo para capturar eventos dos componentes
  const { getByLabelText } = render(
    <Button label="MyButton" onClick={onClick} />
  );

  const btnElement = getByLabelText("my-button");

  // metódo para disparar eventos dos componentes
  fireEvent.click(btnElement);

  expect(onClick).toHaveBeenCalled();
  expect(btnElement).toBeInTheDocument();
  expect(btnElement).toHaveTextContent("MyButton");
  expect(btnElement).toHaveAttribute("type", "submit");
});

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// Observações:
// Um teste bem feito, não conhece detalhes de implementação
// yarnt test , pra rodar
// https://www.youtube.com/watch?v=uSp873d43_E
