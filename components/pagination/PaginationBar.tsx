import { Pagination, Box } from '@mui/material';
import {  SetStateAction, Dispatch } from 'react'



interface Props {
  noOfPages: number,
  currentPage: number | null,
  setCurrentPage: Dispatch<SetStateAction<number | null>>
}

const PaginationBar = ({ noOfPages, currentPage, setCurrentPage }: Props) => {

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