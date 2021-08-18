import ChartBar from './ChartBar';
import './Chart.css';
function Chart(props) {

    const arrSum = arr => arr.reduce((a,b) => a + b, 0)
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalSum = arrSum(dataPointsValues);
    return(
        <div className='chart'>
            {props.dataPoints.map((dataPoint => 
                <ChartBar 
                    key={dataPoint.key}
                    value={dataPoint.value}
                    maxValue={totalSum}
                    label={dataPoint.label}>

                </ChartBar>
            ))}   
        </div>
    );
}

export default Chart;