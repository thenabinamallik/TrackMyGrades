"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Area, AreaChart } from 'recharts'

const sgpaData = [
    { semester: 'Sem 1', sgpa: 6.7, target: 8.5, average: 7.8, year: '2022' },
    { semester: 'Sem 2', sgpa: 7.5, target: 8.5, average: 8.0, year: '2022' },
    { semester: 'Sem 3', sgpa: 8.0, target: 8.5, average: 8.1, year: '2023' },
    { semester: 'Sem 4', sgpa: 8.5, target: 8.5, average: 8.2, year: '2023' },
    { semester: 'Sem 5', sgpa: 8.5, target: 8.5, average: 8.3, year: '2024' },
    { semester: 'Sem 6', sgpa: 8.5, target: 8.5, average: 8.2, year: '2024' },
]

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                <p className="font-medium">{`${label}`}</p>
                {payload.map((entry: any, index: number) => (
                    <p key={index} style={{ color: entry.color }}>
                        {`${entry.name}: ${entry.value}`}
                    </p>
                ))}
                <p className="text-xs text-muted-foreground">
                    {`Academic Year: ${payload[0].payload.year}`}
                </p>
            </div>
        )
    }
    return null
}

interface SGPAChartProps {
    chartType?: 'line' | 'bar' | 'area'
}

export function SGPAChart({ chartType = 'line' }: SGPAChartProps) {
    const currentCGPA = sgpaData.reduce((sum, sem) => sum + sem.sgpa, 0) / sgpaData.length

    const renderChart = () => {
        const commonProps = {
            data: sgpaData,
            margin: { top: 5, right: 30, left: 20, bottom: 5 }
        }

        switch (chartType) {
            case 'area':
                return (
                    <AreaChart {...commonProps}>
                        <defs>
                            <linearGradient id="colorSgpa" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
                            </linearGradient>
                            <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis
                            dataKey="semester"
                            className="text-xs"
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis
                            domain={[7, 10]}
                            className="text-xs"
                            tick={{ fontSize: 12 }}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                            type="monotone"
                            dataKey="sgpa"
                            stroke="#8884d8"
                            fillOpacity={1}
                            fill="url(#colorSgpa)"
                            name="Your SGPA"
                        />
                        <Area
                            type="monotone"
                            dataKey="target"
                            stroke="#82ca9d"
                            fillOpacity={1}
                            fill="url(#colorTarget)"
                            name="Target SGPA"
                        />
                    </AreaChart>
                )
            case 'bar':
                return (
                    <BarChart {...commonProps}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis
                            dataKey="semester"
                            className="text-xs"
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis
                            domain={[7, 10]}
                            className="text-xs"
                            tick={{ fontSize: 12 }}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar
                            dataKey="sgpa"
                            fill="#8884d8"
                            radius={[4, 4, 0, 0]}
                            name="Your SGPA"
                        />
                        <Bar
                            dataKey="average"
                            fill="#82ca9d"
                            radius={[4, 4, 0, 0]}
                            name="Class Average"
                        />
                    </BarChart>
                )
            default:
                return (
                    <LineChart {...commonProps}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis
                            dataKey="semester"
                            className="text-xs"
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis
                            domain={[7, 10]}
                            className="text-xs"
                            tick={{ fontSize: 12 }}
                        />
                        <Tooltip content={<CustomTooltip />} />

                        {/* Your SGPA Line - Primary Blue */}
                        <Line
                            type="monotone"
                            dataKey="sgpa"
                            stroke="#3b82f6"
                            strokeWidth={4}
                            dot={{ fill: "#3b82f6", strokeWidth: 3, r: 8 }}
                            activeDot={{ r: 10, stroke: "#3b82f6", strokeWidth: 3, fill: "#ffffff" }}
                            name="Your SGPA"
                        />

                        {/* Target SGPA Line - Green */}
                        <Line
                            type="monotone"
                            dataKey="target"
                            stroke="#10b981"
                            strokeWidth={3}
                            strokeDasharray="8 8"
                            dot={{ fill: "#10b981", strokeWidth: 2, r: 6 }}
                            activeDot={{ r: 8, stroke: "#10b981", strokeWidth: 2 }}
                            name="Target SGPA"
                        />

                        {/* Class Average Line - Orange */}
                        <Line
                            type="monotone"
                            dataKey="average"
                            stroke="#f59e0b"
                            strokeWidth={2}
                            strokeDasharray="4 4"
                            dot={{ fill: "#f59e0b", strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, stroke: "#f59e0b", strokeWidth: 2 }}
                            name="Class Average"
                        />
                    </LineChart>
                )
        }
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    Semester-wise SGPA Performance
                    <div className="text-sm font-normal text-muted-foreground">
                        Overall CGPA: <span className="font-bold text-primary">{currentCGPA.toFixed(2)}</span>
                    </div>
                </CardTitle>
                <CardDescription>
                    Track your academic performance across all semesters
                </CardDescription>
            </CardHeader>
            <CardContent>
                {/* Chart Type Toggle */}
                <div className="flex gap-2 mb-4">
                    <button
                        onClick={() => window.location.reload()}
                        className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 font-medium"
                    >
                        Line Chart
                    </button>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-1 bg-blue-500 rounded"></div>
                        <span>Your SGPA</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-1 bg-green-500 rounded border-dashed border-2 border-green-500"></div>
                        <span>Target SGPA</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-1 bg-amber-500 rounded border-dashed border-2 border-amber-500"></div>
                        <span>Class Average</span>
                    </div>
                </div>

                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        {renderChart()}
                    </ResponsiveContainer>
                </div>

                {/* Performance Insights */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center p-3 bg-linear-to-br from-green-50 to-green-100 border border-green-200 rounded-lg">
                        <div className="font-semibold text-green-700">Highest SGPA</div>
                        <div className="text-xl font-bold text-green-800">{Math.max(...sgpaData.map(s => s.sgpa))}</div>
                        <div className="text-xs text-green-600">Semester 5</div>
                    </div>
                    <div className="text-center p-3 bg-linear-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
                        <div className="font-semibold text-blue-700">Latest SGPA</div>
                        <div className="text-xl font-bold text-blue-800">{sgpaData[sgpaData.length - 1].sgpa}</div>
                        <div className="text-xs text-blue-600">Current Semester</div>
                    </div>
                    <div className="text-center p-3 bg-linear-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg">
                        <div className="font-semibold text-orange-700">vs Target</div>
                        <div className="text-xl font-bold text-orange-800">
                            {sgpaData[sgpaData.length - 1].sgpa > sgpaData[sgpaData.length - 1].target ? '+' : ''}
                            {(sgpaData[sgpaData.length - 1].sgpa - sgpaData[sgpaData.length - 1].target).toFixed(1)}
                        </div>
                        <div className="text-xs text-orange-600">Above Target</div>
                    </div>
                    <div className="text-center p-3 bg-linear-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg">
                        <div className="font-semibold text-purple-700">Trend</div>
                        <div className="text-xl font-bold text-purple-800">
                            {sgpaData[sgpaData.length - 1].sgpa > sgpaData[0].sgpa ? '📈' : '📉'}
                        </div>
                        <div className="text-xs text-purple-600">
                            {sgpaData[sgpaData.length - 1].sgpa > sgpaData[0].sgpa ? 'Improving' : 'Declining'}
                        </div>
                    </div>
                </div>

                {/* Performance Summary */}
                <div className="mt-6 p-4 bg-linear-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Performance Summary</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <span className="text-blue-700 font-medium">Consistency: </span>
                            <span className="text-blue-800">Above average in 7/8 semesters</span>
                        </div>
                        <div>
                            <span className="text-green-700 font-medium">Best Performance: </span>
                            <span className="text-green-800">Semester 5 (9.1 SGPA)</span>
                        </div>
                        <div>
                            <span className="text-purple-700 font-medium">Improvement Potential: </span>
                            <span className="text-purple-800">Focus on maintaining 9.0+ SGPA</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}