"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/redux/slices/users-slice";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/table-columns/users-columns";
import Spinner from "@/components/ui/spinner";
import { AppDispatch, RootState } from "@/redux/store";
import { useShowErrorMessage } from "@/hooks/use-show-error-message";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    users,
    loading: loadingUsers,
    error: errorUsers,
  } = useSelector((state: RootState) => state.users);

  const showErrorMsg = useShowErrorMessage();

  useEffect(() => {
    if (errorUsers) {
      showErrorMsg(errorUsers);
    }

    if (!users.length) {
      dispatch(fetchUsers());
    }
  }, [errorUsers, dispatch]);

  return (
    <div>
      {loadingUsers || !users.length ? (
        <Spinner />
      ) : (
        <div className="container mx-auto">
          <DataTable columns={columns} data={users} filterKey="email" />
        </div>
      )}
    </div>
  );
};

export default Page;
