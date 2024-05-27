import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Author = {
  name: Scalars['String']['output'];
};

export type Book = {
  author: Author;
  title: Scalars['String']['output'];
};

export type BookQueries = {
  book: Book;
  books: Array<Book>;
  chapter: ChapterQueries;
};

export type Chapter = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type ChapterQueries = {
  chapter: Chapter;
  chapters: Array<Chapter>;
};

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { books: Array<{ title: string, author: { name: string } }> };

export type GetChaptersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChaptersQuery = { chapter: { chapters: Array<{ id: number, name?: string | null, description?: string | null }> } };

export type BookFragmentFragment = { title: string, author: { name: string } };

export type ChapterFragmentFragment = { id: number, name?: string | null, description?: string | null };

export const BookFragmentFragmentDoc = gql`
    fragment bookFragment on Book {
  title
  author {
    name
  }
}
    `;
export const ChapterFragmentFragmentDoc = gql`
    fragment chapterFragment on Chapter {
  id
  name
  description
}
    `;
export const GetBooksDocument = gql`
    query getBooks {
  books {
    ...bookFragment
  }
}
    ${BookFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBooksGQL extends Apollo.Query<GetBooksQuery, GetBooksQueryVariables> {
    document = GetBooksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetChaptersDocument = gql`
    query getChapters {
  chapter {
    chapters {
      ...chapterFragment
    }
  }
}
    ${ChapterFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetChaptersGQL extends Apollo.Query<GetChaptersQuery, GetChaptersQueryVariables> {
    document = GetChaptersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }