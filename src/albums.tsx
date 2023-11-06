import {
  Datagrid,
  List,
  TextField,
  TextInput,
  Identifier,
  RaRecord,
} from "react-admin";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getPhotosUrlByAlbumId } from "./albums.helpers";

export const AlbumList = () => {
  const albumFilters = [
    <TextInput
      source="userId"
      key="userId"
      label="User Id"
      alwaysOn
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon color="disabled" />
          </InputAdornment>
        ),
      }}
    />,
  ];

  return (
    <List filters={albumFilters}>
      <Datagrid
        rowClick={(id: Identifier, resource: string, record: RaRecord) =>
          getPhotosUrlByAlbumId(record.id)
        }
      >
        <TextField source="title" />
        <TextField source="userId" reference="users" label="User Id" />
      </Datagrid>
    </List>
  );
};
