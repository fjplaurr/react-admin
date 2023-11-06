import { AdminContext, testDataProvider, Resource } from "react-admin";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { AlbumList } from "./albums";
import { getPhotosUrlByAlbumId } from "./albums.helpers";
import "@testing-library/jest-dom";

jest.mock("./albums.helpers", () => ({
  getPhotosUrlByAlbumId: jest.fn(),
}));

const dataProvider = testDataProvider({
  // @ts-ignore
  getList: () =>
    Promise.resolve({
      data: [
        {
          userId: 1,
          id: 1,
          title: "quidem molestiae enim",
        },
        {
          userId: 2,
          id: 2,
          title: "quidem molestiae enim",
        },
        {
          userId: 3,
          id: 3,
          title: "lorem ipsum",
        },
      ],
      total: 1,
    }),
});

const customRender = () =>
  render(
    <AdminContext dataProvider={dataProvider}>
      <Resource name="albums" list={AlbumList} recordRepresentation="title" />;
    </AdminContext>
  );

test("shows albums' titles on the list after having being fetched", async () => {
  customRender();
  expect(await screen.findAllByText(/quidem molestiae enim/)).toHaveLength(2);
  expect(await screen.findAllByText(/lorem ipsum/)).toHaveLength(1);
});

test("clicking on a album row, redirects to the photos page", async () => {
  customRender();
  const row = await screen.findAllByText(/quidem molestiae enim/);

  act(() => {
    fireEvent.click(row[0]);
  });

  expect(getPhotosUrlByAlbumId).toHaveBeenCalled();
});
