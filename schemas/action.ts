export function HelloWorldAction(props: any) {
  return {
    label: 'Test task',
    onHandle: () => {
      console.log(props)
      window.open('https://localhost:3000/TestTaskPage?taskId=' + props.id, '_blank')
    }
  }
}