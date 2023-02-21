import * as React from 'react';
import { Layout } from '@/components';
import { ImageServicesPexels } from '@/services';

const Home = () => {
  React.useEffect(() => {
    const fectData = async () => {
      console.log(await ImageServicesPexels());
    };

    fectData();
  }, []);

  return <Layout>Home</Layout>;
};

export default Home;
