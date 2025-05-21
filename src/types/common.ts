export type PageProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

export type Category = "gujarat-tourism" | "india-tour"