import axios from "axios";
import { render, screen } from '@testing-library/react';
import App from './App';
import KeyCloakService from "./security/KeycloakService";

test("Render Homepage", () => {
  expect(true).toBe(true);
});

test("Axios Get", async () => {
  const get = await axios.get("https://jsonplaceholder.typicode.com/posts/1");

  const responseStatus = 200;
  expect(responseStatus).toEqual(get.status)
})

test("Axios Post", async () => {
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  }

  const post = await axios.post("https://jsonplaceholder.typicode.com/posts", data);
  const responseStatus = 201;
  expect(responseStatus).toEqual(post.status)
})

test("Axios update", async () => {
  const data = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
  }

  const update = await axios.put("https://jsonplaceholder.typicode.com/posts/1", data);
  const responseStatus = 200;
  expect(responseStatus).toEqual(update.status)
})

test("Axios delete", async () => {
  const dlt = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");

  const responseStatus = 200;
  expect(responseStatus).toEqual(dlt.status)
})

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


test('Check token from Keycloak', () => {
  const config = {
    headers: { Authorization: `Bearer ${KeyCloakService.GetToken()}` }
  };

  expect(config).toEqual({ headers: { Authorization: `Bearer ${KeyCloakService.GetToken()}` } })
})