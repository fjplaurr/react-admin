import { AdminContext, testDataProvider, Resource } from "react-admin";
import { render, screen } from "@testing-library/react";
import { PhotoGridList } from "./photos";
import "@testing-library/jest-dom";

const dataProvider = testDataProvider({
  // @ts-ignore
  getList: () =>
    Promise.resolve({
      data: [
        {
          albumId: 1,
          id: 1,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952",
        },
        {
          albumId: 2,
          id: 2,
          title: "reprehenderit est deserunt velit ipsam",
          url: "https://via.placeholder.com/600/771796",
          thumbnailUrl: "https://via.placeholder.com/150/771796",
        },
      ],
      total: 1,
    }),
});

const customRender = () =>
  render(
    <AdminContext dataProvider={dataProvider}>
      <Resource name="photos" list={PhotoGridList} />
    </AdminContext>
  );

test("shows photos' titles on the list after having being fetched", async () => {
  customRender();
  expect(await screen.findByText(/accusamus beatae ad/)).toBeInTheDocument();
  expect(await screen.findByText(/reprehenderit est/)).toBeInTheDocument();
});
