import {
  searchSucceeded,
  setSearchOption,
  setSearchText,
  useAppSelector,
} from '@/redux';
import { ImageServicesPexels } from '@/services';
import { VideoServicesPexels } from '@/services/pexels/video-services-pexels';
import { type ISearchDataState } from '@/types';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from '@mui/material';
import * as React from 'react';
import { useDispatch } from 'react-redux';

const Search = () => {
  const { searchOption, searchText } = useAppSelector(
    (state) => state.images as ISearchDataState
  );
  const dispatch = useDispatch();

  const handleChangeOption = (event: SelectChangeEvent) => {
    dispatch(setSearchOption(event.target.value));
  };

  const handleChangeSearchText = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setSearchText(event.target.value));
  };

  const handleClickSearch = () => {
    const searchImages = async () => {
      const multimediaOutput =
        searchOption === 'image'
          ? await ImageServicesPexels(searchText)
          : await VideoServicesPexels(searchText);
      dispatch(searchSucceeded(multimediaOutput));
    };

    void searchImages();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingY: '3rem',
        bgcolor: 'secondary.main',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <Box sx={{ width: '15rem' }}>
        <img width={'100%'} src="./logo_images.png" />
      </Box>
      <FormControl sx={{ m: 1, width: 'auto' }} size="small">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              gap: '1rem',
            }}
          >
            <Box>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={searchOption}
                onChange={handleChangeOption}
                inputProps={{
                  MenuProps: {
                    MenuListProps: {
                      sx: {
                        backgroundColor: 'secondary.main',
                      },
                    },
                  },
                }}
                sx={{
                  bgcolor: 'secondary.main',
                  '& .MuiSelect-select': {
                    bgcolor: 'secondary.main',
                    paddingY: '1rem',
                  },
                }}
              >
                <MenuItem value={'image'}>Image</MenuItem>
                <MenuItem value={'video'}>Video</MenuItem>
              </Select>
            </Box>
            <TextField
              id="outlined-basic"
              label="Text"
              variant="outlined"
              onChange={handleChangeSearchText}
              sx={{
                width: {
                  xs: 'auto',
                  sm: '15rem',
                  md: '20rem',
                  lg: '20rem',
                },
              }}
            />
          </Box>

          <Button
            variant="outlined"
            sx={{ height: '3.4rem' }}
            onClick={handleClickSearch}
          >
            Search
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default Search;
