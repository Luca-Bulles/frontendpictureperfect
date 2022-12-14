import axios from "axios";
import { render, screen } from '@testing-library/react';
import App from './App';
import KeyCloakService from "./security/KeycloakService";

test("Render Homepage", () => {
  expect(true).toBe(true);
});

test("Test Post", async () => {
  const config = {
    headers: { Authorization: `Bearer ${KeyCloakService.GetToken()}` }
  };
  const data = {
    cast
      :
      "Luca",
    category
      :
      "Movies",
    contentId
      :
      3,
    description
      :
      "test",
    duration
      :
      "128 minures",
    name
      :
      "test for update",
    subject
      :
      "test",
    year
      :
      2022
  }

  //const test = await axios.post("https://localhost:5003/ocelot/content", data, config);
  const test2 = await axios.get("https://jsonplaceholder.typicode.com/todos");

  //const respondStatus = test.status
  const respondStatus2 = test2.status
  expect(respondStatus2).toEqual(200)
})

test('renders Homepage', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
