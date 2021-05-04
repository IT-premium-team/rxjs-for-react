import React, { useEffect, useState } from 'react';
import { taskTransferStore } from './task-store-transfer-service';

export const SomeReactComponent = (props) => {
  const [task, setTask] = useState(taskTransferStore.initialState);

  useEffect(() => {
    const subscription = taskTransferStore.subscribe(setTask);
    taskTransferStore.init();

    // ...

    const cleanup = () => {
      if (subscription && subscription.unsubscribe) {
        subscription.unsubscribe();
      }
    };
    return cleanup;
  }, []);
}
