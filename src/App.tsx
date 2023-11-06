import {
  Admin,
  Resource,
  EditGuesser,
  ShowGuesser,
  radiantLightTheme,
  radiantDarkTheme,
} from "react-admin";
import { AlbumList } from "./albums";
import { PhotoShow, PhotoEdit, PhotoGridList } from "./photos";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    theme={radiantLightTheme}
    darkTheme={radiantDarkTheme}
  >
    <Resource
      name="albums"
      list={AlbumList}
      edit={EditGuesser}
      show={ShowGuesser}
      recordRepresentation="title"
    />
    <Resource
      name="photos"
      list={PhotoGridList}
      edit={PhotoEdit}
      show={PhotoShow}
    />
  </Admin>
);
