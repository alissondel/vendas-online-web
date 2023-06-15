import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';

function Product() {
  const { user } = useGlobalContext();
  return (
    <div>
      <h1>{user?.name}</h1>
    </div>
  );
}

export default Product;
