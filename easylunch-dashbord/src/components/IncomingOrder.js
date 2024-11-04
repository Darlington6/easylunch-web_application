import React from 'react';

const IncomingOrder = () => {
  const orders = [
    {
      id: 1,
      name: "Belyse Niyonsenga",
      email: "belyse@gmail.com",
      product: "pizza",
      totalPrice: "$20",
    },
    {
      id: 2,
      name: "Don Dushime",
      email: "don@gmail.com",
      product: "Chips",
      totalPrice: "$99",
    },
    {
      id: 3,
      name: "Alberta",
      email: "alberta@gmail.com",
      product: "Bugger",
      totalPrice: "$30",
    },
    {
      id: 4,
      name: "Desmond",
      email: "desmond@gmail.com",
      product: "posta",
      totalPrice: "$19",
    },
    {
      id: 5,
      name: "Habibllah",
      email: "habibllah@gmail.com",
      product: "special pizza",
      totalPrice: "$40",
    },
  ];

  return (
    <>
    
    <div className=" overflow-x-auto d mb-40 sm:rounded-lg">
    <h1 className='font-bold leading-relaxed text-2xl text-center py-10'> Incoming Orders</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">ID</th>
            <th scope="col" className="px-6 py-3">Names</th>
            <th scope="col" className="px-6 py-3">Customer Email</th>
            <th scope="col" className="px-6 py-3">Product Name</th>
            <th scope="col" className="px-6 py-3">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">{order.id}</td>
              <td className="px-6 py-4">{order.name}</td>
              <td className="px-6 py-4">{order.email}</td>
              <td className="px-6 py-4">{order.product}</td>
              <td className="px-6 py-4">{order.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default IncomingOrder;
