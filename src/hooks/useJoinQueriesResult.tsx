import { useEffect, useState } from 'react';
import { UseQueryResult } from 'react-query';

export interface IBasicQueryItem<TData> {
    data?: TData;
    error?: unknown;
    isLoading?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    isIdle?: boolean;
}

export type TQueryResult<TData> =
    | IBasicQueryItem<TData>
    | UseQueryResult<TData>;

export type TUseJoinQueryResultsOptions = {
    filter?: (item?: TQueryResult<any>) => any;
};

function useJoinQueryResults<TData>(
    queries: TQueryResult<TData>[],
    options?: TUseJoinQueryResultsOptions
) {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isIdle, setIsIdle] = useState(false);
    const [errors, setErrors] = useState([]);

    const baseQueries = queries.filter(Boolean);

    if (options?.filter) {
        baseQueries.filter(options.filter);
    }

    useEffect(() => {
        const newIsSuccess = baseQueries.every(query => query?.isSuccess);
        const newIsLoading = baseQueries.some(query => query?.isLoading);
        const newIsIdle = baseQueries.some(query => query?.isIdle);
        const newErrors = baseQueries
            .map(query => (query?.isError ? query?.error : null))
            .filter(Boolean);

        if (newErrors.length !== errors.length) setErrors(newErrors as []);
        if (isSuccess !== newIsSuccess) setIsSuccess(newIsSuccess);
        if (isLoading !== newIsLoading) setIsLoading(newIsLoading);
        if (isIdle !== newIsIdle) setIsIdle(newIsIdle);
    }, [baseQueries, errors.length, isIdle, isLoading, isSuccess]);

    return {
        errors,
        isError: !!errors.length,
        isIdle,
        isLoading,
        isSuccess
    };
}

export default useJoinQueryResults;
