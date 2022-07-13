// notes :  createApi to mock api behaviour, 
// query to egt data, 
// mutation : to actually chgn it, 
// fecthbasequey to get teh url 
// erndpoints to soecify the data endpoint if u hv multuiple
//make cusotm hook to get the data unlike react-query 

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi(
    {
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
        tagTypes : ['Todos'],
        endpoints: (builder) => ({
            getTodos: builder.query({
                query: () => '/todos',
                providesTags : ['Todos']
            }),
            addTodo: builder.mutation({
                query: (todo) => ({
                    url: '/todos',
                    method: 'POST',
                    body: todo
                }),
                invalidatesTags: ['Todos']
            }),
            updateTodo: builder.mutation({
                query: (todo) => ({
                    url: `/todos/${todo.id}`,
                    method: 'PATCH',
                    body: todo
                }),
                invalidatesTags: ['Todos']
            }),
            // searchTodos : builder.query({
            //     query: (id)=> `/todos/${id}`
            // }),

            deleteTodo: builder.mutation({
                query: ({ id }) => ({
                    url: `/todos/${id}`,
                    method: 'DELETE',
                    body: id
                }),
                invalidatesTags: ['Todos']
            }),
        })
    })

    export const {
        useGetTodosQuery,
        useAddTodoMutation,
        useUpdateTodoMutation,
        useDeleteTodoMutation,
        // useSearchTodosQuery,
    } = apiSlice




// export const { useGetTodosQuery } = apiSlice;

