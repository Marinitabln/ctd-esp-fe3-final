import { Pagination, Box } from '@mui/material';
import { useState } from 'react'

interface Props {
    page: string | string[],
    comicsTotal: number
}

const PaginationBar = ({ page, comicsTotal }: Props) => {
/*     const pages = Array.from({ length: 1 }, (_, i) => {
        const pageNumber = Number(page);
        return i - (pageNumber === 1 ? 0 : 1) + pageNumber;
    });
 */
const [pageNumber, setPageNumber]= useState(Number(page))
    
    const itemsPerPage = 12;
    const [noOfPages] = useState(Math.ceil(comicsTotal / itemsPerPage));

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPageNumber(value);
    };

    return (
        <Box component="span">
           {/*  {pages.map((p) => ( */}
                <Pagination
                    count={noOfPages}
                    page={Number(page)}
                    onChange={handleChange}
                    defaultPage={1}
                    showFirstButton
                    showLastButton
                    sx={{ margin: '20px' }}
                />
        {/*     ))} */}
        </Box>
    )
}

export default PaginationBar