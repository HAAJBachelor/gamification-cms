export function TestTask(props: any) {
  return {
    label: 'Test task',
    onHandle: () => {
      window.open('https://localhost:3000/TestTaskPage?taskId=' + props.id, '_blank')
    }
  }
}