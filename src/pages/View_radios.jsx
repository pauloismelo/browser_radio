function View_radios({name, city, state}) {
    return ( 
        <div className="row">
            <div className="col-2"></div>
            <div className="col-6">
                {name}
                <small>
                    {city}, {state}
                </small>
            </div>
            <div className="col-2"></div>
            <div className="col-2"></div>
        </div>
     );
}

export default View_radios;