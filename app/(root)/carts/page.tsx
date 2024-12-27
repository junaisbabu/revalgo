"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarts } from "@/redux/slices/carts-slice";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/table-columns/carts-columns";
import Spinner from "@/components/ui/spinner";
import { AppDispatch, RootState } from "@/redux/store";
import { useShowErrorMessage } from "@/hooks/use-show-error-message";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    carts,
    loading: loadingCarts,
    error: errorCarts,
  } = useSelector((state: RootState) => state.carts);

  const showErrorMsg = useShowErrorMessage();

  useEffect(() => {
    if (errorCarts) {
      showErrorMsg(errorCarts);
    }

    if (!carts.length) {
      dispatch(fetchCarts());
    }
  }, [errorCarts, dispatch]);

  return (
    <div>
      {loadingCarts || !carts.length ? (
        <Spinner />
      ) : (
        <div className="container mx-auto">
          <DataTable columns={columns} data={carts} filterKey="userId" />
        </div>
      )}
    </div>
  );
};

export default Page;
