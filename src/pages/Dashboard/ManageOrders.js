import React from 'react';
import { QueryClient, QueryClientProvider,useQuery } from 'react-query'
import Loading from '../../components/Loading';
 
const queryClient = new QueryClient()
 export default function ManageOrders() {
   return (
     <QueryClientProvider client={queryClient}>
       <Example />
     </QueryClientProvider>
   )
 }
 
const Example = () => {
    const {data: orders, error, isLoading, refetch} = useQuery('orders', ()=> fetch('http://localhost:5000/orders').then(res => res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    if (error) return 'An error has occurred: ' + error.message

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? ');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data));
            const rest = orders.filter(order => order._id !== id);
            // document.location.reload();
       

        }
    }

    return (
        <div>
            <p className='text-3xl text-error font-bold mt-10 pb-3'>All Orders({orders.length})</p>
            <div class="w-full shadow-2xl ">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {orders.reverse().map((order, index) =>
                            <tr key={index} refetch={refetch}>
                                <th>{index + 1}</th>
                                <td>{order.user}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                <td>{order.name}</td>
                                <td>{order.totalPrice}</td>
                                <td className='grid grid-col-1  lg:grid-cols-2 gap-1 justify-center'>
                                <button onClick={() => {
                                    handleDelete(order._id)
                                }} class="btn btn-error btn-xs">Delete</button></td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

// export default ManageOrders;