'use client';

import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import TVShowCard from 'components/cards/TVShowCard';
import { mockTVShows } from 'data/mockData';

export default function TVShowsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredShows = mockTVShows.filter(
        (show) =>
            show.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            show.overview.toLowerCase().includes(searchTerm.toLowerCase()) ||
            show.genres.some((genre) => genre.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <Box>
            <Typography variant="h2" sx={{ mb: 3 }}>
                TV Shows
            </Typography>
            <TextField
                fullWidth
                placeholder="Search TV shows..."
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
                {filteredShows.map((show) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={show.id}>
                        <TVShowCard show={show} />
                    </Grid>
                ))}
            </Grid>
            {filteredShows.length === 0 && (
                <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
                    No TV shows found matching your search.
                </Typography>
            )}
        </Box>
    );
}
