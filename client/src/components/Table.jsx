import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../app/store";
import { getAll } from "../slice/cargoSlice";

export default function Table() {
  const dispatch = useDispatch();
  const { orders, isErr } = useSelector((store) => store.cargo);
  console.log(orders);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    WEIGHT
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    BOX COLOR
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    COUNTRY
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    cost
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {orders.map((obj, index) => {
                  return (
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {obj.fullName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {obj.weight}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                        <a
                          className="text-green-500 hover:text-green-700"
                          href="#"
                        >
                          {obj.color}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                        <a className="text-red-500 hover:text-red-700" href="#">
                          {obj.country}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                        <a className="text-red-500 hover:text-red-700" href="#">
                          {obj.totalCost}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
