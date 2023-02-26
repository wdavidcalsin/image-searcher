import { useSearch } from '@/hooks';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

const Search = () => {
  const {
    searchOption,
    handleChangeOption,
    handleChangeSearchText,
    handleClickSearch,
  } = useSearch();

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
