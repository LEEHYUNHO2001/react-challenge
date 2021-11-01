import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";

const Container = styled.div`
    padding: 0px 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;

const SearchPresenter = ({ movieResults,tvResults,searchTerm,
    handleSubmit,error,loading, updateTerm}) => <Container>
    <Form onSubmit={handleSubmit}>
        <Input placeholder="Search Movies or TV Show.." 
        value={searchTerm} onChange={updateTerm}/>
    </Form>
    {loading ? <Loader /> 
    : <>
        {movieResults && movieResults.length > 0 && 
        <Section title="Movie Results">
            {movieResults.map(movie => <span key={movie.id}>{movie.title}</span>)}    
        </Section>}
        {tvResults && tvResults.length > 0 && 
        <Section title="TV Show Results">
            {tvResults.map(show => <span key={show.id}>{show.name}</span>)}    
        </Section>}
    </>}
</Container>;

SearchPresenter.propTypes = {
    movieResults:PropTypes.array,
    tvResults:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
    searchTerm:PropTypes.string,
    handleSubmit:PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;