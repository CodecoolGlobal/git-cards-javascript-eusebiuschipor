const Navbar = ({favoriteRepoList, cardList}) => {
    if (cardList.length === 0) {
        return (
            <>
            </>
        );
    }

    return (
        <>
            <div style={{position: 'fixed', top:0, width: '100%', zIndex: 1}}>
                <div className="row bg-info">
                    {favoriteRepoList.map((repo, index) =>
                        <div key={index} className="col-4 text-center">{repo.name}</div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar;