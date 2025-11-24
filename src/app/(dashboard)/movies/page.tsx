'use client';

import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import MovieCard from 'components/cards/MovieCard';
import { mockMovies } from 'data/mockData';

export default function MoviesPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredMovies = mockMovies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.overview.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.genres.some((genre) => genre.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <Box>
            <Typography variant="h2" sx={{ mb: 3 }}>
                Movies
            </Typography>
            <TextField
                fullWidth
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ mb: 4 }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
            />
            <Grid container spacing={3}>
                {filteredMovies.map((movie) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                        <MovieCard movie={movie} />
                    </Grid>
                ))}
            </Grid>
            {filteredMovies.length === 0 && (
                <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
                    No movies found matching your search.
                </Typography>
            )}
        </Box>
    );
}
