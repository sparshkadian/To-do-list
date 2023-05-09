import { motion, AnimatePresence } from 'framer-motion';
import SingleItem from './SingleItem';
import { useContext } from 'react';
import TasksContext from '../Context/TasksContext';

function ListItems() {
  const { data } = useContext(TasksContext);

  return (
    <div>
      <AnimatePresence>
        {data.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SingleItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ListItems;
