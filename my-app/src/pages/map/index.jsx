import React from 'react';
import { Link } from 'react-router-dom'
import L from 'leaflet';
import './index.less';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.mainMap = {};
    }

    componentDidMount() {
        this.initMainMap();
        window.mainMap = this.mainMap;
    }

    async initMainMap() {
        let centerPoint = new L.LatLng(window.config.cityData.centerCoor.lat, window.config.cityData.centerCoor.lng); // 设置地图中心 [28.93592,118.87419],29.839584,121.548062
        let param = {
            center: centerPoint,
            maxZoom: window.config.cityData.maxZoom,
            zoom: window.config.cityData.zoomLevel,
            minZoom: window.config.cityData.minZoom
        };
        this.mainMap = new L.map('mainmap', param);
        let urls = window.config.cityData.tiles;
        for (let i = 0, il = urls.length; i < il; i++) {
            this.mainMap.addLayer(new L.tileLayer(urls[i].url));
        }
    }

    render() {
        const { time, userName } = this.props;
        return (
            <div className='Map' id='mainmap'>
                <Link className='link' to={window.config.prefix === '' ? '/' : window.config.prefix}>返回</Link>
            </div>
        )
    }
}
export default Map