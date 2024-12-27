"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/slices/products-slice";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/table-columns/products-columns";
import Spinner from "@/components/ui/spinner";
import { AppDispatch, RootState } from "@/redux/store";
import { useShowErrorMessage } from "@/hooks/use-show-error-message";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
  } = useSelector((state: RootState) => state.products);

  const showErrorMsg = useShowErrorMessage();

  useEffect(() => {
    if (errorProducts) {
      showErrorMsg(errorProducts);
    }

    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [errorProducts, dispatch]);

  return (
    <div>
      {loadingProducts || !products.length ? (
        <Spinner />
      ) : (
        <div className="container mx-auto">
          <DataTable columns={columns} data={products} filterKey="title" />
        </div>
      )}
    </div>
  );
};

export default Page;
