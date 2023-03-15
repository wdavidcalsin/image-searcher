import {
  useAppSelector,
  setSearchOption,
  setSearchText,
  searchSucceeded,
  setIsLoadingFile,
} from '@/redux';
import { ImageServicesPexels, VideoServicesPexels } from '@/services';
import { type ISearchDataState } from '@/types';
import { type SelectChangeEvent } from '@mui/material';
import { useDispatch } from 'react-redux';

export const useSearch = () => {
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
      dispatch(setIsLoadingFile(true));

      const multimediaOutput =
        searchOption === 'image'
          ? await ImageServicesPexels(searchText)
          : await VideoServicesPexels(searchText);
      dispatch(searchSucceeded(multimediaOutput));

      dispatch(setIsLoadingFile(false));
    };

    if (searchText === '') return;

    void searchImages();
  };

  return {
    searchOption,
    searchText,
    handleChangeOption,
    handleChangeSearchText,
    handleClickSearch,
  };
};
