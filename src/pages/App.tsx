import CoursePreview from "../components/CoursePreview";
import { courses } from "../coursedata/courses";

function App() {
	return (
		<div>
			<div className="mx-auto grid w-full grid-flow-row grid-cols-1 gap-10 md:grid-cols-2">
				{courses.map((course) => (
					<CoursePreview key={course.name} course={course} />
				))}
			</div>
		</div>
	);
}

export default App;
