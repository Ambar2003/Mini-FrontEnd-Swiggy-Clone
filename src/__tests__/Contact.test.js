import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
test("Should load contact us component",() =>{
    //render
    render(<Contact/>);
    //query
    const heading = screen.getByRole("heading");
    //assert
    expect("heading").toBeInTheDocument();
});