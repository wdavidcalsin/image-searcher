import { Layout, Search, SearchResultComponent } from '@/components';

const Home = () => {
  // const { searchResult } = useAppSelector(
  //   (state) => state.images as IImageSearchDataState
  // );
  // const dispatch = useDispatch();

  // const loadImage = async () => {
  //   const imagesFound = await ImageServicesPexels();

  //   dispatch(searchSucceeded(imagesFound));
  // };

  // React.useEffect(() => {
  //   void loadImage();
  // }, []);

  return (
    <Layout>
      <Search />
      <SearchResultComponent />
    </Layout>
  );
};

export default Home;
