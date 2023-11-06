import {
  List,
  ReferenceField,
  TextField,
  UrlField,
  ImageField,
  SimpleShowLayout,
  Show,
  SimpleForm,
  TextInput,
  Edit,
  useRecordContext,
  ReferenceInput,
  EditButton,
  ShowButton,
  RecordContextProvider,
  useListContext,
} from "react-admin";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Tooltip,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Photo {record ? `"${record.title}"` : ""}</span>;
};

const photosFilters = [
  <TextInput
    source="albumId"
    key="albumId"
    label="Album Id"
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

export const PhotoGridList = () => (
  <List filters={photosFilters} perPage={25} actions={false}>
    <PhotoGrid />
  </List>
);

const PhotoGrid = () => {
  const { data, isLoading } = useListContext();

  if (isLoading) {
    return null;
  }
  return (
    <Grid container spacing={2} sx={{ mt: 0, mb: 5 }}>
      {data.map((record) => (
        <RecordContextProvider key={record.id} value={record}>
          <Grid key={record.id} xs={12} sm={6} md={4} lg={3} xl={2} item>
            <Card sx={{ maxWidth: "90vw" }}>
              <CardMedia
                image={`${record.thumbnailUrl}`}
                sx={{ height: 150 }}
              />
              <CardContent>
                <Tooltip title={record.title}>
                  <Typography
                    variant="body1"
                    component="h1"
                    align="center"
                    noWrap
                  >
                    {record.title}
                  </Typography>
                </Tooltip>
              </CardContent>
              <CardActions>
                <EditButton />
                <ShowButton />
              </CardActions>
            </Card>
          </Grid>
        </RecordContextProvider>
      ))}
    </Grid>
  );
};

export const PhotoShow = () => (
  <Show title={<PostTitle />}>
    <SimpleShowLayout>
      <ReferenceField source="albumId" reference="albums" />
      <TextField source="id" />
      <TextField source="title" />
      <UrlField source="url" />
      <UrlField source="thumbnailUrl" />
      <ImageField source="thumbnailUrl" label="" />
    </SimpleShowLayout>
  </Show>
);

export const PhotoEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm sx={{ width: "100%" }}>
      <ReferenceInput source="albumId" reference="albums" />
      <TextInput source="id" InputProps={{ disabled: true }} />
      <TextInput source="title" multiline rows={5} />
      <TextInput source="url" />
      <TextInput source="thumbnailUrl" />
      <ImageField
        source="thumbnailUrl"
        sx={{
          "& .RaImageField-image": {
            width: 150,
            height: 150,
            objectFit: "cover",
          },
        }}
      />
    </SimpleForm>
  </Edit>
);
