"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/redux/slices/users-slice";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/table-columns/users-columns";
import Spinner from "@/components/ui/spinner";
import { AppDispatch, RootState } from "@/redux/store";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    users,
    loading: loadingUsers,
    error: errorUsers,
  } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
