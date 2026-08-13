import { PieChart, Pie, Cell } from 'recharts';
function ProgressPie({ done, total }) {
const data = [{ value: done }, { value: total - done }];
return (
<PieChart width={120} height={120}>
<Pie data={data} dataKey="value" innerRadius={35} outerRadius={55}>
<Cell fill="var(--color-primary)" />
<Cell fill="var(--color-accent)" />
</Pie>
</PieChart>
);
}