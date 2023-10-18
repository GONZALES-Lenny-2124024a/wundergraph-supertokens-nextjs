import { createWunderGraphNext } from '../components/generated/nextjs'

const { client, withWunderGraph, useQuery, useMutation, useSubscription, useUser, useAuth, useFileUpload } =
	createWunderGraphNext({
    baseURL: `${process.env.NEXT_PUBLIC_APP_URL}/api/wg`,
    ssr: true,
	});

export { client, withWunderGraph, useQuery, useMutation, useSubscription, useUser, useAuth, useFileUpload };
