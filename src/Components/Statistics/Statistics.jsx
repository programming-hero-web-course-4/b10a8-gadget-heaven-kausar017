import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const statistics = useLoaderData();

    // Check if statistics data exists
    if (!statistics || statistics.length === 0) {
        return <div>Loading or No Data Available</div>;
    }

    // Prepare the data for the chart
    const chartData = statistics.map((item) => ({
        name: item.product_title || 'Unknown Product',
        price: item.price || 0,
        rating: item.rating || 0,
    }));

    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Statistics</title>
                    <link rel="canonical" href="https://www.example.com/" />
                </Helmet>
                <div className='text-center py-10 bg-[#9538E2] text-white space-y-5'>
                    <h1 className='text-3xl font-bold'>Statistics</h1>
                    <p>Statistics is the study of data collection, analysis, interpretation, and presentation. It helps in making informed <br /> decisions based on numerical information and patterns.</p>
                </div>

                <div className='my-10 flex flex-col justify-center items-center'>
                    <ResponsiveContainer width="100%" height={500}>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {/* Price Bar */}
                            <Bar dataKey="price" fill="#8884d8" name="Price" />
                            {/* Rating Bar */}
                            <Bar dataKey="rating" fill="#82ca9d" name="Rating" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </HelmetProvider>
    );
};

Statistics.propTypes = {};

export default Statistics;
