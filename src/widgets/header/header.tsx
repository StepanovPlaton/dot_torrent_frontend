export function Header() {
  return (
    <div className="w-full bg-bg1 h-32 p-8 flex items-center justify-around">
      <div className="w-full max-w-7xl h-full flex items-center justify-between">
        <div className="w-50 text-6xl text-fg0">.Torrent</div>
        <div className="w-1/2 h-full mb-3 flex items-end justify-around">
          {["Игры", "Фильмы", "Аудиокниги"].map((section) => (
            <div key={section} className="px-4 text-3xl text-fg0">
              {section}
            </div>
          ))}
        </div>
        <div className="w-50 h-full flex flex-col items-end justify-evenly">
          <div className="text-fg0 text-xl flex items-end">
            <svg className="h-6 w-6 m-1">
              <path
                d="M7 6.6718C7.85087 6.6718 8.6669 6.32103 9.26856 5.69667C9.87022 5.07231 10.2082 4.22549 10.2082 3.34251C10.2082 2.45952 9.87022 1.6127 9.26856 0.988341C8.6669 0.363978 7.85087 0.0132141 7 0.0132141C6.14913 0.0132141 5.3331 0.363978 4.73144 0.988341C4.12978 1.6127 3.79177 2.45952 3.79177 3.34251C3.79177 4.22549 4.12978 5.07231 4.73144 5.69667C5.3331 6.32103 6.14913 6.6718 7 6.6718ZM7 8.13453C2.73445 8.13453 0 10.5773 0 11.7666V13.9875H14V11.7666C14 10.3283 11.4113 8.13453 7 8.13453Z"
                fill="#EBDBB2"
              />
            </svg>
            Войти
          </div>
        </div>
      </div>
    </div>
  );
}
