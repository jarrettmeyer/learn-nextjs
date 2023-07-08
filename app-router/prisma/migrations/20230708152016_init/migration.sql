-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "assignedTo" VARCHAR(200),
    "dueDateTime" TIMESTAMPTZ,
    "completedDateTime" TIMESTAMPTZ,
    "createdDateTime" TIMESTAMPTZ NOT NULL,
    "modifiedDateTime" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);
