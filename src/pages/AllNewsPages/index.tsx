import { trpc } from '../../lib/trpc'

export const AllNewsPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getNews.useQuery()
  if (isLoading || isFetching) return <p>Загрузка новостей...</p>
  if (isError) return <p>Ошибка загрузки новостей: {error.message}</p>

  return (
    <div>
      <h1>Pioner News</h1>
      {/* Динамическое отображение новостей */}
      {data ? (
        data.news.map((newItem) => (
          <div key={newItem.nick}>
            <h2>{newItem.name}</h2>
            <p>{newItem.description}</p>
          </div>
        ))
      ) : (
        <p>Загрузка новостей...</p>
      )}
    </div>
  )
}
