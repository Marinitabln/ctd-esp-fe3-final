import { Pagination, Box } from '@mui/material';
import { Comics } from 'interfaces/comic';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';


interface Props {
   comics: Comics,
   itemsPerPage: number
}


const PaginationBar = ({ comics, itemsPerPage }: Props) => {

    const comicsTotal: number = comics?.data.total
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState<number | null>(1);

    const noOfPages = Math.ceil(comicsTotal / itemsPerPage);
   
    useEffect(() => {
        localStorage.clear();
    }, []);

    useEffect(() => {
        if (currentPage !== null) {
            router?.push(`/?page=${currentPage}`);
        }
    }, [currentPage]);
  
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    return (
        <Box component="span">
            <Pagination
                count={noOfPages}
                page={currentPage ? currentPage : 1}
                onChange={handleChange}
                defaultPage={1}
                showFirstButton
                showLastButton
                sx={{ margin: '20px' }}
            />
        </Box>
    )
}

export default PaginationBar